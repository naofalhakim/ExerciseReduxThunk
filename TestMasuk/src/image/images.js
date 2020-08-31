import React from 'react';
import {Image, View} from 'react-native';
import loupeImage from '../image/loupe.png';
import styled from 'styled-components';

const LoupeImage = styled(Image)`
  width: 12px;
  height: 12px;
`;

const IconAction = styled(Image)`
  width: 20px;
  height: 20px;
`;

const AssetImage = ({name}) => (
  <View >
    {name === 'ic-loupe-image' && <LoupeImage source={loupeImage} />}
    {name === 'ic-add' && <IconAction source={require('../image/add.png')} />}
    {name === 'ic-delete' && (
      <IconAction source={require('../image/bin.png')} />
    )}
    {name === 'ic-edit' && <IconAction source={require('../image/edit.png')} />}
    {name === 'ic-correct' && (
      <IconAction source={require('../image/correct.png')} />
    )}
    {name === 'ic-close' && (
      <IconAction source={require('../image/close.png')} />
    )}
  </View>
);

export default AssetImage;
