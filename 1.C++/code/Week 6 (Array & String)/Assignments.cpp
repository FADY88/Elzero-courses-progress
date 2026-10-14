#include <string.h>
#include <iostream>
using namespace std;

int main()
{
  string fName = "Elzero ";
  string mName = "Web ";
  string lName = "School";

  cout << fName << mName << lName << "\n";

  cout << fName + mName + lName << "\n";

  cout << fName.append(mName + lName) << "\n";
  
  // Output Needed
  // "Elzero Web School"
  // "Elzero Web School"
  // "Elzero Web School"
  return 0;
}