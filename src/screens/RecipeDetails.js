import React, {useState, useEffect, useCallback} from 'react';
import {View, Image, Text, FlatList, Button, StyleSheet} from 'react-native';
import Ingredient from '../components/Ingredient';



export default function RecipeDetails(props) {

    const {route, navigation} = props;
    const {params} = route;
    const [recipe, setRecipe] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        navigation.setOptions({title: params.recipeTitle})
        fetch('https://api.spoonacular.com/recipes/'+params.recipeId+'/information?includeNutrition=false&apiKey=615b314a6a4b4a54b246b9e99c9519a0')
        .then(response => response.json())
        .then(json => {
            setRecipe(json);
            setIngredients(recipe.extendedIngredients);
            console.log('recipe', recipe.extendedIngredients);

        })
        .catch(error => {
            console.error(error);
        })

    }, []);

    return (
        <View container={styles.container}>
            <Image style={styles.image} source={{uri: recipe.image}}/>
                <Text>{recipe.title}</Text>
                <Text>{recipe.readyInMinutes}</Text>
                <Text>{recipe.serving} persons</Text>
                <Text>{recipe.instructions}</Text>
                <FlatList
                   data={ingredients}
                   renderItem={values => <Ingredient
                               item={values.item}
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
        flexDirection: 'row',
    },
    image: {
        backgroundColor: "grey",
        borderRadius: 5,
        height: 220,
        width: 220,
        margin: 30,
    },
});