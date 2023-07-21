import csv
from src.models.dish import Dish
from src.models.ingredient import Ingredient

# Req 3
class MenuData:
    def __init__(self, source_path: str) -> None:
        self.dishes = set()
        self.ingredients = set()
        self._load_data(source_path)

    def _load_data(self, source_path: str):
        with open(source_path, 'r') as file:
            reader = csv.reader(file)
            next(reader)  

            for row in reader:
                dish_name = row[0]
                dish_price = float(row[1])
                ingredient_name = row[2]
                ingredient_quantity = int(row[3])

                dish = self._get_or_create_dish(dish_name, dish_price)
                ingredient = self._get_or_create_ingredient(ingredient_name)

                dish.add_ingredient_dependency(ingredient, ingredient_quantity)

    def _get_or_create_dish(self, name: str, price: float) -> Dish:
        for dish in self.dishes:
            if dish.name == name:
                return dish

        dish = Dish(name, price)
        self.dishes.add(dish)
        return dish

    def _get_or_create_ingredient(self, name: str) -> Ingredient:
        for ingredient in self.ingredients:
            if ingredient.name == name:
                return ingredient

        ingredient = Ingredient(name)
        self.ingredients.add(ingredient)
        return ingredient