#include <iostream>
using namespace std;

void generateLettersASCII(char start = 'A', char end = 'z')
{
  for (int i = start; i <= end; i++)
  {
    cout << char(i) << " | " << i << endl;
  }
}

int main()
{
  generateLettersASCII();
  return 0;
}