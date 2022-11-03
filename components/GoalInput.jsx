import { useState } from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    Button,
    Modal,
    Image,
} from 'react-native';
const GoalInput = ({ buttonHandler, openModal, onCancel }) => {
    const [inputValue, setInputValue] = useState('');
    const goalInputHandler = (value) => {
        setInputValue(value);
    };

    const addGoalHandler = () => {
        buttonHandler(inputValue);
        setInputValue('');
    };
    return (
        <Modal visible={openModal} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholder='Your course goal!'
                    value={inputValue}
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={onCancel.bind(this, false)}
                            color='#f31282'
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                            color='#b180f0'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginTop: 16,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
export default GoalInput;
