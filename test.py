# from collections import Counter
# def getMaximumMex(arr,x):
#     count = Counter([num % x for num in arr])

#     for i in range(len(arr)):
#         if count[i % x] == 0:
#             return i
#         count[i % x] -= 1

#     return len(arr)

main
...
open (os. environ ['OUTPUT_PATH'], 'w')
n = int(input(). strip ())
function_mapper = {
"delay _max": delay_max,
"delay _min": delay_min,
"delay_sum": delay_sum,
for - in range(n) :
row = input .rstrip).split
decorated_ func = timeit (function_mapper[rowLoJ
args = row[1:-1]
for i in range (len(args)):
argslil = int(args[i])
fptr write(str(decorated_func(*args, delay=int(row[-1]))) + "\n")
error = 5