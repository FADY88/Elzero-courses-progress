#include <iostream>
using namespace std;

// Write Your Function Here
int pricing(int phones_count, int used_phones, int price, int taxes_percent)
{
  int revenue = (phones_count - used_phones) * price;
  revenue += used_phones * (price - 200);
  return (100 - taxes_percent) / 100.0 * revenue;
}
// Write Your Function Here

int main()
{
  cout << pricing(50, 10, 800, 20) << "\n"; // 30400
  return 0;
}