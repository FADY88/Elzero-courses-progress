#include <iostream>
using namespace std;

// Write Your Function Here
string greeting(string name, string gender)
{
  if ("Male" == gender || "male" == gender)
  {
    return "Hello Mr " + name;
  }
  else if ("female" == gender || "Female" == gender)
  {
    return "Hello Miss " + name;
  }
  else
  {
    return "Hello Miss " + name;
  }
}
string greeting(string name)
{
  return "Hello " + name;
}
// Write Your Function Here

int main()
{
  cout << greeting("Osama", "male") << "\n"; // Hello Mr Osama
  cout << greeting("Eman", "Female") << "\n"; // Hello Miss Eman
  cout << greeting("Sameh") << "\n"; // Hello Sameh
  return 0;
}