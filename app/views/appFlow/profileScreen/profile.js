import React from 'react';
import styles from './style';
import { View, Text, ScrollView } from 'react-native';
import { titles } from '../../../services/constants';
import CodeBlock from './components/codeBlock';
import { blocks } from '../../../../__mocks__/temp';


const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.mainHeaderText}>{titles.I_AM}</Text>
            </View>
            <ScrollView>
                {blocks.map(({ arrays, header }) => {
                    console.log(arrays);

                    return (
                        <CodeBlock list={arrays} header={header} />
                    )
                })}
            </ScrollView>
        </View>
    );
}
export default ProfileScreen;