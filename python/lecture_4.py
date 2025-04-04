# dict ={
#     "key" : "value",
#     "name" :"syed",
#     "learning" :"coding",
#     "age" :25,
#     "men" :["true"],
#     "working" : ("yes")

#     }
# # print(dict["name"])
# dict["name"] = "rahman"
# print(dict)

# nested dictnory

# student = {
#     "name" :"rahul",
   
#     "subjects" : {
#         "phy" : 95,
#         "math" : 85,
#         "che" :87

#               },
#     "age" : 25
    
# }
# print(student)
# print(student ["subjects"]["che"])


#methods in dictionary

# student = {
#     "name" :"rahul",
   
#     "subjects" : {
#         "phy" : 95,
#         "math" : 85,
#         "che" :87

#               },
#     "age" : 25
    
# }
# print(student.keys())
# print(student.values())
# print(student.get("age"))
# print(student.items())
# pairs = list((student.items()))
# print(pairs[0]) 
# print(len(list(student.keys())))
# print(student.get("name"))   #not give err  if added name2
# print(student["name"])    #give error if added name2 

# student.update({"city":"hyd"})
# print(student)


# set in pythons

# set is the collection of unorder items it is unique and immuatable
# collection ={1,2,3,4,"world" ,"hello"}
# print(collection)
# print(len(collection))


# collection =set() #empty dictionary 

# print(type(collection))


# elements IN SETS

# collection =set()

# collection.add(1)
# collection.add(2)
# collection.add(3)
# collection.add(4)
# collection.remove(3)
# collection.add(78)
# collection.add(88)

# collection.clear()

# print(collection)
# print(collection.pop())
# print(len(collection))


# methods in sets 
# setunion

# set1 = {1,2,3}
# set2 = {3,2,5}
# # print(set1.union(set2))
# print(set1.intersection(set2))


# practics questions

# words = {"table" :[ "a piece of furniture" "list of facts"],
#          "cat" : "a small animal"
#          }
# print(words)


subjects = [ ]



