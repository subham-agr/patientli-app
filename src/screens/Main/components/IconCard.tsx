import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface IIconCardProps {
    title: string;
    icon: any;
}

const IconCard = (props: IIconCardProps) => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={require(props.icon)} width={10} height={10} />
        </View>
        <View>
            <Text>{props.title}</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 50,
        borderRadius: 5,
        borderColor: '#ECECEC',
        borderWidth: 1,
        margin: 10,
        padding: 5
    }
})

export default IconCard