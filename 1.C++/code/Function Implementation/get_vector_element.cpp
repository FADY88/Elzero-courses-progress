#include <iostream>
#include <vector>
using namespace std;


string GetElement(vector<string> arr, string position)
{
  int size = arr.size();

  int index = 0;
  for (char c : position)
  {
    if (isdigit(c))
    {
      index *= 10;
      index += c - '0'; 
    }
  }

  if (position == "start")
    return arr[0];
  else if (position == "end")
    return arr[size - 1];
  else if (index < size)
    return arr[index];
  else
    return "Invalid Index.";
}


int main()
{
  cout << GetElement({"ff", "dd", "aa", "kk", "tt"}, "start");
}