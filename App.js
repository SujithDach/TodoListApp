import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const startAddGoalHandler = () => {
        setModalIsVisible(true);
    };

    const addGoalHandler = (inputValue) => {
        if (inputValue !== '') {
            setGoals((prevState) => [
                ...prevState,
                { text: inputValue, id: Math.random().toString() },
            ]);
        }
        setModalIsVisible(false);
    };

    const clearGoalHandler = () => {
        setGoals([]);
    };

    const deleteGoal = (id) => {
        setGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    };

    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button
                    title='Add New Goal'
                    onPress={startAddGoalHandler}
                    color='#a065ec'
                />
                <GoalInput
                    buttonHandler={addGoalHandler}
                    openModal={modalIsVisible}
                    onCancel={setModalIsVisible}
                />
                <View style={styles.goalsContainer}>
                    <View style={styles.goalHeadingContainer}>
                        <Text style={styles.goalHeading}>List of Goals</Text>
                        <Button
                            title='Clear Goals'
                            onPress={clearGoalHandler}
                            color='#a065ec'
                        />
                    </View>
                    <FlatList
                        data={goals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoal}
                                />
                            );
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
    },
    goalHeading: {
        margin: 8,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#fff',
    },
    goalHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
