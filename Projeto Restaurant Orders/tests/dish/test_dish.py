import pytest
from src.models.dish import Dish  # noqa: F401, E261, E501
from src.models.ingredient import Ingredient, Restriction


# Req 2
def test_dish():
    dish2 = Dish("x", 2.00)
    dish = Dish("Spaghetti", 10.99)
    assert dish.name == "Spaghetti"
    assert dish.price == 10.99
    assert dish.recipe == {}
    with pytest.raises(ValueError):
        Dish("Spaghetti", -55.55)
    with pytest.raises(TypeError):
        Dish("Spaghetti", "9.99")
    assert hash(dish) != hash(dish2)
    assert hash(dish) == hash(dish)
    assert repr(dish) != "Dish('x', R$2.00)"
    assert repr(dish) == "Dish('Spaghetti', R$10.99)"
    assert dish != Dish("x", 2.00)
    assert dish.get_ingredients() == set()
    assert dish == Dish("Spaghetti", 10.99)
    dish.add_ingredient_dependency(Ingredient("carne"), 1)
    assert dish.get_restrictions() == {
        Restriction.ANIMAL_DERIVED,
        Restriction.ANIMAL_MEAT,
    }
    assert dish.get_ingredients() == {Ingredient("carne")}