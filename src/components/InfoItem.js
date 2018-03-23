import React, {Component} from 'react';
import {Image, Text, View} from "react-native";

class InfoItem extends Component {
    render () {
        return (
            <View>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.image}}/>
                <Text> {this.props.text}</Text>
            </View>
        )
    }
}



export default InfoItem;