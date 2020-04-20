import React from 'react';
import {MaterialIcons} from 'react-native-vector-icons';
import {TouchableWithoutFeedback} from 'react-native';

import {Buttons, Label} from './styles';

export default function PayButton({onPress, focused}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Buttons
        colors={focused ? ['#fff', '#ccc'] : ['#00fc6c', '#00ac4a']}
        start={[1, 0.2]}>
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? '#000' : '#fff'}
        />
        <Label focused={focused}>Pagar</Label>
      </Buttons>
    </TouchableWithoutFeedback>
  );
}
