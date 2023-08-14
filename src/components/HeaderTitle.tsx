import React from 'react';
import {View, Text, Switch} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  title: string;
}

const HeaderTitle = ({title}: Props) => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
