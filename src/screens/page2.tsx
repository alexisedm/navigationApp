import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button } from 'react-native'
import { View, Text } from 'react-native'
import { styles } from '../theme/appTheme'

const page2 = () => {

    const navigator = useNavigation()
    return (
        <View style={styles.globalMargin}>
            <Text>Screen 2</Text>

            <Button
                title="Ir a pagina 3"
                onPress={() => navigator.navigate('page3')}
            >

            </Button>
        </View>
    )
}

export default page2;
