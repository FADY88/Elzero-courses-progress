/*String
    What is string ?
    String types
      C style class using standard library
    Test types size
    Null terminated string
    \0 => Null
    Remember => String is an array of characters*/
#include <iostream> 
using namespace std;
int main()
{
  cout << "I am Dragon\n";     // 12 => Remember
  cout << "I am\n\0 Dragon\n"; // I am

  char name_a[] = "Elzero";
  cout << name_a << "\n";         // Elzero\0
  cout << sizeof(name_a) << "\n"; // 1 * 7 = 7
  cout << name_a[0] << "\n";      // E
  cout << name_a[5] << "\n";      // o
  cout << int(name_a[6]) << "\n"; // \0 => ASCII Value => 0
  cout << int('\b') << "\n";      // \b => ASCII Value => 8

  char name_b[] = {'E', 'l', 'z', 'e', 'r', 'o', '\0'};
  cout << name_b << "\n";         // Elzero\0
  cout << sizeof(name_b) << "\n"; // 1 * 7 = 7
  cout << name_b[0] << "\n";      // E
  cout << name_b[5] << "\n";      // o

  string name_c = "Elzero";
  cout << name_c << "\n";         // Elzero\0
  cout << sizeof(name_c) << "\n"; // 32
  cout << name_c[0] << "\n";      // E
  cout << name_c[5] << "\n";      // o
  return 0;
}