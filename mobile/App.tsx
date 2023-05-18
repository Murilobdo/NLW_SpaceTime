import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

import { 
  useFonts, 
  Roboto_400Regular,  
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { 
  BaiJamjuree_700Bold,  
} from '@expo-google-fonts/bai-jamjuree';

import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/strippes.svg'
import NLWLogo from './src/assets/nlw-spacetime-logo.svg'

import { styled } from 'nativewind';

const StyledStrippes = styled(Stripes)

export default function App() {

  const [ hasLoadedFonts ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  });

  if (!hasLoadedFonts)
    return null

  return (
    <ImageBackground 
      source={blurBg} 
      className='flex-1 items-center relative bg-gray-900 px-8 py-10'
      imageStyle={{ position: 'absolute', left: '-100%'}}>
      <StyledStrippes className='absolute left-2' />

      <View className='flex-1 items-center justify-center gap-6'>
        <NLWLogo />

        <View className='space-y-2'>
          <Text className='font-title text-2xl text-white text-center leading-tight'>Sua cápsula do tempo</Text>
          <Text className='font-body text-gray-100 text-base leading-relaxed text-center'>Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity className='rounded-full bg-green-500 px-5 py-3' activeOpacity={0.7}>
          <Text className='font-alt text-sm text-black'>CADASTRAR LEMBRAÇA</Text>
        </TouchableOpacity>
      </View>

      <Text className='text-center font-body text-sm leading-relaxed text-gray-200'>
        Feito com 💜 no NLW da Rocketseat
      </Text>

    </ImageBackground>
  );
}

