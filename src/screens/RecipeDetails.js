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
        fetch('https://api.spoonacular.com/recipes/'+params.recipeId+'/information?includeNutrition=false&apiKey=ec45e52f836946d2aec3fe29155b1255')
        .then(response => response.json())
        .then(json => {
            setRecipe(json);
            setIngredients(json.extendedIngredients);
            console.log('recipe', recipe.extendedIngredients);

        })
        .catch(error => {
            console.error(error);
        })

    }, []);

    return (
                <View container={styles.container}>
                    <View style={styles.rowContainer}>
                        <Image style={styles.image} source={{uri: recipe.image}}/>
                        <View style={styles.test}>
                            <FlatList style={styles.flatlist}
                                 data={ingredients}
                                 renderItem={values => <Ingredient
                                             item={values.item}
                                         />}
                                 //renderItem={values => <Text>{values.item.title}</Text>}
                                 keyExtractor={item => item.id}
                             />
                        </View>

                    </View>

                    <Text style={styles.title}>{recipe.title}</Text>
                    <Text style={styles.bold}>Cooking Time : {recipe.readyInMinutes} minutes</Text>
                    <Text style={styles.bold}>For {recipe.servings} persons</Text>
                    <Text style={styles.bold}>Instructions : </Text>
                    <Text>{recipe.instructions}</Text>

                </View>
            );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        rowContainer: {
          flexDirection: 'row'
        },

        image: {
            backgroundColor: "grey",
            borderRadius: 5,
            height: 110,
            width: 110,
            margin: 20,
        },
        title: {
            fontSize: 20,
            color: '#44A1A0',
            fontWeight: 'bold',
            marginBottom: 10,
        },
        bold: {
            fontWeight: 'bold',
            marginBottom: 10,
        },
        flatlist: {
            height: 50,
            width: '100%',
            marginTop: 10,
            marginBottom: 20,
        }
    });