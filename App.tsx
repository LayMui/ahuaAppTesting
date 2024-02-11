import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { forwardRef, useRef, useState } from 'react'
import testProperties from "./utils/testProperties";
// import { Button } from '@yaradigitallabs/ahua-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Modalize, ModalizeProps } from 'react-native-modalize';


export type BottomSheetProps = ModalizeProps & {
  /** BottomSheet width among full | standard */
  
  /** Used to locate this view in end-to-end tests. */
  testID?: string;

  /** Used to toggle accessible*/
  accessible?: boolean;

  /** Used to add accessibilityLabel*/
  accessibilityLabel?: string;
};



const App = forwardRef((props: BottomSheetProps, ref) => {
  const [count, setCount] = useState(0);

  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  
const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <GestureHandlerRootView
    style={{ width: '100%' , height: '100%' }}
    >
       <Modalize 
         {...props}
         modalStyle={[props.modalStyle]}
       ref={ref}>...your content</Modalize>
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      {/* <Button title="Primary" /> */}
     <TouchableOpacity style={styles.button}  {...testProperties("langInput")} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
    </GestureHandlerRootView>
  )
})

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
