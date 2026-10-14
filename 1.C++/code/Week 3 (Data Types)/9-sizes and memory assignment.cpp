//   - Application To Create
//   --- Create App Ask You To Type Number Of Kilobytes
//   --- Write 3 Lines Contains
//   ------ [1] The Number Of Kilobytes That User Input
//   ------ [2] The Number Of Bytes
//   ------ [3] The Number Of Bits
#include <iostream>
using namespace std;

int main()
{
    cout << "= Kilobytes to Bytes and Bites =\n";
    int Kilo;
    cout << "Please enter the number of kilos you want to convert.\n";
    cin >> Kilo;
    //operation starts
    cout << "Number of Kilobytes is: " << Kilo << "\n";
    cout << "Number of Bytes is: " << Kilo * 1024 << "\n";
    cout << "Number of Bites is: " << Kilo * 1024 * 8 << "\n";
}