### Slash command
| command | description       |
|---------|-------------------|
| /동전게임   | 동전의 앞 또는 뒷면 결과 응답 |

### 봇 도커로 배포하기

1. 프로젝트 루트에 `config.json` 파일을 생성한다.
2. `config.json` 파일은 다음과 같은 형식을 따른다
```json
    {
      "token" : "봇 토큰",
      "clientId" : "봇 프로젝트 아이디",
      "guildId" : "서버 아이디"
    }
```
3. 프로젝트 루트에서 `Dockerfile`을 이용해 도커 이미지를 빌드한다.
```shell
    docker build --tag <이미지 이름> ./
```
4. 빌드한 이미지를 컨테이너로 실행한다.
```shell
    docker run -dit <이미지 이름>
```