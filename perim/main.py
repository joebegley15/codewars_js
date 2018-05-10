def perimeter(n):
    if n < 3:
        return n * 4
    else:
        sum = 0
        fibArr = [1,1]
        for i in range(2,n):
            fibArr.append(fibArr[-1] + fibArr[-2])
            sum += fibArr[-1] + fibArr[-2]
    return (sum + 4) * 4