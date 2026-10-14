#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  vector<int> firstnumbers = { 10, 30, 50, 70 };
  vector<int> secondnumbers = { 20, 40, 60, 80 };
  // Creating a vector
  vector<int> vectors;
  // Inserting two vectors into the new one
  vectors.insert(vectors.begin(), firstnumbers.begin(), firstnumbers.end());
  vectors.insert(vectors.end(), secondnumbers.begin(), secondnumbers.end());
  // Sorting the new vector
  sort(vectors.begin(), vectors.end());
  // Printing values 
  for (int it : vectors)
  {
    cout << it << "\n";
  }
  return 0;
}

// Output Needed
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80