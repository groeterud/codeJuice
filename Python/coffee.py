from dataclasses import dataclass

@dataclass
class Coffee:
    ammount: int

def writeCode(coffee: Coffee):
    while coffee.ammount > 0:
        print("I'm writing code!")
        coffee.ammount -= 1

writeCode(Coffee(5))

