import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Recipe from '../components/Recipe';

export default function Recipes(props){
    const [data, setData] = useState([]);
    const {navigation} = props;

    useEffect(() => {
        fetch('https://api.spoonacular.com/recipes/search?apiKey=ec45e52f836946d2aec3fe29155b1255')
        .then(response => response.json())
        .then(json => {
            setData(json.results);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    const onPress = useCallback(
        selectedItem => {
            console.log('selectedItem', selectedItem);
            navigation.navigate('RecipeDetails', { recipeId: selectedItem.id, recipeTitle: selectedItem.title});
    }, [navigation]);

    return(
        <View style={styles.container}>
        <FlatList
            data={data}
            renderItem={values => <Recipe
                        item={values.item}
                        onPress={onPress}
                    />}
            //renderItem={values => <Text>{values.item.title}</Text>}
            keyExtractor={item => item.id}
        />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});