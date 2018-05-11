def possibilities(param):
    if "?" not in param:
        return [param];
    newStringZero = ''
    newStringOne = ''
    used = True
    for i in range(len(param)):
        if param[i] == '?' and used:
            newStringZero += '0'
            newStringOne += '1'
            used = False
        else:
            newStringZero += param[i]
            newStringOne += param[i]
    return possibilities(newStringZero) + possibilities(newStringOne)