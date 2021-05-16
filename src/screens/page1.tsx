import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native'

interface Props extends  StackScreenProps<any, any>{};

const page1 = ({ navigation }: Props) => {
    return (
        <View>
            <Text>Screen 1</Text>

            <Button
            title="Ir a pagina 2"
            onPress={() => navigation.navigate('page2')}
            >

            </Button>
        </View>
    )
}

export default page1;
