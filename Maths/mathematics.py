def summation(a, b):
    try:
        result = a + b
        return result
    except(TypeError):
        return "wrong input"

def subtraction(a, b):
    try:
        result = a - b
        return result
    except(TypeError):
        return "wrong input"

def multiplication(a, b):
    try:
        result = a * b
        return result
    except(TypeError):
        return "wrong input"
