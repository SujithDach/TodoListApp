import { View, Text, StyleSheet, Pressable } from 'react-native';

// To make a component pressable we add the pressable tag
const GoalItem = ({ text, id, onDeleteItem }) => {
    return (
        <View style={styles.goalItem} key={id}>
            <Pressable
                onPress={onDeleteItem.bind(this, id)}
                android_ripple={{ color: '#210644' }}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e08cc',
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});
export default GoalItem;
