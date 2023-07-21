from src.models.ingredient import Ingredient, Restriction  # noqa: F401, E261, E501


# Req 1
def test_ingredient():
    cheese_one = Ingredient('queijo mussarela')
    cheese_two = Ingredient('queijo mussarela')
    bacon = Ingredient('bacon')
    
    assert hash(cheese_one) == hash(cheese_two)
    assert hash(cheese_one) != hash(bacon)
    assert cheese_one == cheese_two
    assert cheese_one != bacon
    assert repr(cheese_one) == "Ingredient('queijo mussarela')"
    assert cheese_one.name == 'queijo mussarela'
    expected_restrictions = {Restriction.LACTOSE, Restriction.ANIMAL_DERIVED}
    assert cheese_one.restrictions == expected_restrictions
    assert isinstance(cheese_one, Ingredient)
