from csv import DictReader
from typing import Dict

from src.models.dish import Recipe
from src.models.ingredient import Ingredient

BASE_INVENTORY = "data/inventory_base_data.csv"

Inventory = Dict[Ingredient, int]


def read_csv_inventory(inventory_file_path=BASE_INVENTORY) -> Inventory:
    inventory = dict()

    with open(inventory_file_path, encoding="utf-8") as file:
        for row in DictReader(file):
            ingredient = Ingredient(row["ingredient"])
            inventory[ingredient] = int(row["initial_amount"])

    return inventory


# Req 5
class InventoryMapping:
    def __init__(self, inventory_file_path=BASE_INVENTORY) -> None:
        self.inventory = read_csv_inventory(inventory_file_path)

    # Req 5.1
    def check_recipe_availability(self, recipe: Recipe) -> bool:
        result = True
        for ingredient in recipe:
            expression = ingredient in self.inventory
            if expression and recipe[ingredient] <= self.inventory[ingredient]:
                result = True
            else:
                return False
        return result

    # Req 5.2
    def consume_recipe(self, recipe: Recipe) -> None:
        print(recipe.items())
        if self.check_recipe_availability(recipe) is False:
            raise ValueError()
        
        for ingredient in recipe:
            self.inventory[ingredient] -= recipe[ingredient]
        return None