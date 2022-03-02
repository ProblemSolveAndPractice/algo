#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

int dx[4] = {-1, 1, 0, 0};
int dy[4] = {0, 0, 1, -1};

// 전역 변수를 정의할 경우 함수 내에 초기화 코드를 꼭 작성해주세요.
vector<int> solution(int m, int n, vector<vector<int>> picture) {
    int number_of_area = 0;
    int max_size_of_one_area = 0;
    bool check[101][101] = {false,};
    vector<int> v;
    for (int i=0; i<m; i++) {
        for (int j=0; j<n; j++) {
            if (picture[i][j] == 0 || check[i][j]) continue;
            queue<pair<int, int>> q;
            q.push(make_pair(i,j));
            check[i][j] = true;
            v.push_back(1);
            while(!q.empty()) {
                int x = q.front().first;
                int y = q.front().second;
                q.pop();
                for (int k=0; k<4; k++) {
                    int nx = x + dx[k];
                    int ny = y + dy[k];
                    if (nx < 0 || nx >= m || ny < 0 || ny >= n) continue;
                    if (check[nx][ny]) continue;
                    if (picture[nx][ny] == picture[x][y]) {
                        check[nx][ny] = true;
                        q.push(make_pair(nx, ny));
                        v.back()++;
                    }
                }
            }
        }
    }
    vector<int> answer(2);
    answer[0] = v.size();
    answer[1] = *max_element(v.begin(), v.end());
    return answer;
}