BEGIN;

INSERT INTO users VALUES 
(1, 'Patrick', 'asdfklöjasödklfjö', '2017-12-25 17:00:00'),
(2, 'Abby', 'fewijfooijwebfue', '2020-09-25 08:00:00'),
(3, 'Yassien', 'wefnoiewjfnioewn', '2019-10-23 13:00:00'),
(4, 'Paz', 'wefji0wefjiowefjni', '2018-11-22 04:00:00')
ON CONFLICT DO NOTHING;


INSERT INTO questions VALUES 
(1, 1, 'mindset', 'What tasks take you outside of your comfort zone?', '2018-03-25 18:00:00'),
(2, 3, 'mindset', 'What is your standard approach to new challenges?', '2019-10-28 19:00:00'),
(3, 2, 'Icebreaker', 'Pull out your phone; what is your most used emoji?', '2020-09-27 15:21:00'),
(4, 2, 'Icebreaker', 'If you could try any food, what would it be?', '2020-11-04 19:33:00'),
(5, 3, 'Holiday', 'What is the best holiday or winter treat?','2019-10-28 21:00:00')
ON CONFLICT DO NOTHING;