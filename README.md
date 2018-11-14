# trueglobal

| 说明         | 接口     | 方式 | 参数                                              |其他|
| ------------ | -------- | ---- | ------------------------------------------------- |--|
| 发送邮件     | /sendMail | POST | 无                                                |--|
| 注册         | /register | POST | mail/password/authCode/isReset(传 1 代表重置密码) |--|
| 登录         | /login    | POST | mail/password                                     |--|
| 添加团队信息 | /team     | POST | name/leader/phone                                 |携带token|
