import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button } from 'react-native';
import { View, Text } from 'react-native'
interface Props extends  StackScreenProps<any, any>{};

const page3 = ({ navigation }: Props) => {


    return (
        <View>
            <Text>3</Text>

            <Button
            title="Regresar"
            onPress={() => navigation.pop()}
            >

            </Button>

            <Button
            title="Ir a Screen 1"
            onPress={() => navigation.popToTop()}
            >

            </Button>
            
        </View>
    )
}

export default page3;
