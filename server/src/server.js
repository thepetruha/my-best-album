const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

const store = {
    categoris: [
        {
            name: "Images",
            posts: [
                {
                    id: 1,
                    name: "Лето",
                    imgs: [
                        '/images/storege/img.jpeg',
                        '/images/storege/img1.jpeg',
                        '/images/storege/img2.jpeg',
                        '/images/storege/img3.jpeg'
                    ]
                },
                {
                    id: 2,
                    name: "Лето",
                    imgs: [
                        '/images/storege/img1.jpeg',
                        '/images/storege/img.jpeg',
                        '/images/storege/img2.jpeg',
                        '/images/storege/img3.jpeg'
                    ]
                },
                {
                    id: 3,
                    name: "Лето",
                    imgs: [
                        '/images/storege/img2.jpeg',
                        '/images/storege/img1.jpeg',
                        '/images/storege/img.jpeg',
                        '/images/storege/img3.jpeg'
                    ]
                },
                {
                    id: 4,
                    name: "Лето",
                    imgs: [
                        '/images/storege/img3.jpeg',
                        '/images/storege/img1.jpeg',
                        '/images/storege/img2.jpeg',
                        '/images/storege/img.jpeg'
                    ],
                }
            ],
        },
        {
            name: "Memories",
            posts: [
                {
                    id: 5,
                    name: "Моя учеба",
                    caption: "Обучение не грех!",
                    description: `Текст рыба
                    Задача организации, в особенности же курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации существующих финансовых и административных условий. Таким образом, социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для направлений прогрессивного развития.
                    
                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений прогрессивного развития! С другой стороны постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации форм воздействия. Равным образом дальнейшее развитие различных форм деятельности напрямую зависит от соответствующих условий активизации? Задача организации, в особенности же выбранный нами инновационный путь напрямую зависит от дальнейших направлений развитая системы массового участия.
                    
                    Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения ключевых компонентов планируемого обновления. Дорогие друзья, начало повседневной работы по формированию позиции играет важную роль в формировании ключевых компонентов планируемого обновления? Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности направлений прогрессивного развития. С другой стороны выбранный нами инновационный путь представляет собой интересный эксперимент проверки ключевых компонентов планируемого обновления!
                    
                    Не следует, однако, забывать о том, что социально-экономическое...`,
                    imgs: [
                        '/images/storege/img4.jpeg',
                        '/images/storege/img5.webp'
                    ]
                },
                {
                    id: 6,
                    name: "Программирование",
                    caption: "Все или ничего",
                    description: `Текст рыба
                    Задача организации, в особенности же курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации существующих финансовых и административных условий. Таким образом, социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для направлений прогрессивного развития.
                    
                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений прогрессивного развития! С другой стороны постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации форм воздействия. Равным образом дальнейшее развитие различных форм деятельности напрямую зависит от соответствующих условий активизации? Задача организации, в особенности же выбранный нами инновационный путь напрямую зависит от дальнейших направлений развитая системы массового участия.
                    
                    Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения ключевых компонентов планируемого обновления. Дорогие друзья, начало повседневной работы по формированию позиции играет важную роль в формировании ключевых компонентов планируемого обновления? Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности направлений прогрессивного развития. С другой стороны выбранный нами инновационный путь представляет собой интересный эксперимент проверки ключевых компонентов планируемого обновления!
                    
                    Не следует, однако, забывать о том, что социально-экономическое...`,
                    imgs: [
                        '/images/storege/img5.webp',
                        '/images/storege/img4.jpeg'
                    ]
                },
                {
                    id: 7,
                    name: "Моя учеба",
                    caption: "Обучение не грех!",
                    description: `Текст рыба
                    Задача организации, в особенности же курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации существующих финансовых и административных условий. Таким образом, социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для направлений прогрессивного развития.
                    
                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений прогрессивного развития! С другой стороны постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации форм воздействия. Равным образом дальнейшее развитие различных форм деятельности напрямую зависит от соответствующих условий активизации? Задача организации, в особенности же выбранный нами инновационный путь напрямую зависит от дальнейших направлений развитая системы массового участия.
                    
                    Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения ключевых компонентов планируемого обновления. Дорогие друзья, начало повседневной работы по формированию позиции играет важную роль в формировании ключевых компонентов планируемого обновления? Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности направлений прогрессивного развития. С другой стороны выбранный нами инновационный путь представляет собой интересный эксперимент проверки ключевых компонентов планируемого обновления!
                    
                    Не следует, однако, забывать о том, что социально-экономическое...`,
                    imgs: [
                        '/images/storege/img4.jpeg',
                        '/images/storege/img5.webp'
                    ]
                },
                {
                    id: 8,
                    name: "Программирование",
                    caption: "Все или ничего",
                    description: `Текст рыба
                    Задача организации, в особенности же курс на социально-ориентированный национальный проект влечет за собой процесс внедрения и модернизации существующих финансовых и административных условий. Таким образом, социально-экономическое развитие влечет за собой процесс внедрения и модернизации модели развития. Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции создаёт предпосылки качественно новых шагов для направлений прогрессивного развития.
                    
                    Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании направлений прогрессивного развития! С другой стороны постоянный количественный рост и сфера нашей активности влечет за собой процесс внедрения и модернизации форм воздействия. Равным образом дальнейшее развитие различных форм деятельности напрямую зависит от соответствующих условий активизации? Задача организации, в особенности же выбранный нами инновационный путь напрямую зависит от дальнейших направлений развитая системы массового участия.
                    
                    Повседневная практика показывает, что постоянное информационно-техническое обеспечение нашей деятельности требует определения и уточнения ключевых компонентов планируемого обновления. Дорогие друзья, начало повседневной работы по формированию позиции играет важную роль в формировании ключевых компонентов планируемого обновления? Практический опыт показывает, что постоянное информационно-техническое обеспечение нашей деятельности способствует повышению актуальности направлений прогрессивного развития. С другой стороны выбранный нами инновационный путь представляет собой интересный эксперимент проверки ключевых компонентов планируемого обновления!
                    
                    Не следует, однако, забывать о том, что социально-экономическое...`,
                    imgs: [
                        '/images/storege/img5.webp',
                        '/images/storege/img4.jpeg'
                    ]
                },
            ]
        }
    ]
}

app.use(cors())
app.use(bodyParser.json());

app.get('/albums', (req, res) => {
    res.status(200).send({
        data: store
    })
})

app.get('/albums/:category/:post_id', (req, res) => {
    const { category, post_id } = req.params

    const arrPost = store.categoris.filter((item) => item.name === category)
    const post = arrPost.length > 0 && arrPost[0].posts.filter((p) => p.id === +post_id)

    res.status(200).send({
        data: post || []
    })
})

app.delete('/albums/:category/:post_id', (req, res) => {
    const { category, post_id } = req.params

    try {
        let postIndex = null;
        let categoryIndex = null;
        store.categoris.forEach((c, ci) => {
            if (c.name === category) {
                categoryIndex = ci
                c.posts.forEach((p, pi) => {
                    if (p.id === +post_id) postIndex = pi
                })
            }
        })


        if (postIndex === null || categoryIndex === null) {
            return res.status(500).send({ err: "Error: get index post" })
        }
        store.categoris[categoryIndex].posts.splice(postIndex, 1);

        res.status(200).send({
            status: "ok"
        })
    } catch (err) {
        res.status(500).send({
            err: "Error delete post"
        })
    }
})

app.get('/albums/categoris', (req, res) => {
    const arr = []
    store.categoris.forEach(element => {
        arr.push(element.name)
    });

    res.status(200).send({
        data: arr
    })
})

app.post('/albums/create', (req, res) => {
    const { categoryName, post } = req.body

    store.categoris.find((item, i) => {
        if (item.name === categoryName) {
            store.categoris[i].posts.push(post)
        }
    })

    res.status(200).send({
        status: "ok"
    })
})

app.listen(4000, () => {
    console.log("Start server: host -> http://localhost:4000")
})