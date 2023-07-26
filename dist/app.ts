import express, { Request, Response } from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req: Request, res: Response) => {
  const { id, password } = req.body;

  if (id === '') {
    return res.status(406).json({ message: '아이디를 입력해주세요.' });
  }

  if (password === '') {
    return res.status(406).json({ message: '비밀번호를 입력해주세요.' });
  }

  if (id === 'test' && password === '1234') {
    const data = {
      idx: 1,
      managerName: '강수성',
      store: '경북대점',
      storeNum: '5838601250',
    };
    return res.json(data);
  }

  return res
    .status(406)
    .json({ message: '아이디 혹은 비밀번호를 확인해주세요.' });
});

app.post('/logout', (req: Request, res: Response) => {
  return res.json({ message: '로그아웃 되었습니다.' });
});

app.get('/waitList/getList', (req: Request, res: Response) => {
  const { params } = req;
  const { type } = params;

  const data = [
    {
      idx: 1,
      name: '박민정',
      phone: '010-0000-0000',
      registerTime: '2023-07-16 05:45:15',
      party: 4,
    },
    {
      idx: 2,
      name: '박민정',
      phone: '010-0000-0000',
      registerTime: '2023-07-16 05:45:15',
      party: 4,
    },
    {
      idx: 3,
      name: '박민정',
      phone: '010-0000-0000',
      registerTime: '2023-07-16 05:45:15',
      party: 4,
    },
  ];
  return res.json(data);
});

app.post('/waitList/request', (req: Request, res: Response) => {
  return res.json({ message: '요청 성공' });
});

app.get('/charge/getList', (req: Request, res: Response) => {
  const data = [
    {
      idx: 1,
      date: '23.07.16',
      type: '충전',
      paymentType: '카드',
      pay: '30,000',
      chargePoint: '1,000',
      point: '1,000',
    },
    {
      idx: 2,
      date: '23.07.16',
      type: '차감',
      paymentType: '카드',
      pay: '15,000',
      chargePoint: '500',
      point: '500',
    },
    {
      idx: 3,
      date: '23.07.16',
      type: '충전',
      paymentType: '계좌',
      pay: '30,000',
      chargePoint: '500',
      point: '1280',
    },
  ];
  return res.json(data);
});

app.post('/charge/payment', (req: Request, res: Response) => {
  const { pay } = req.body;
  return res.json({ pay });
});

app.get('/wallet', (req: Request, res: Response) => {
  const { storeNum } = req.query;

  if (storeNum === '5838601250') {
    return res.json({
      total: '1,580',
      history: '580',
      available: '1,000',
    });
  }

  return res.status(406).json({ message: '조회할 수 없는 가맹점입니다.' });
});

app.listen(8080);
