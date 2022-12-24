import './app.css';

const tasks = [
    {
        id: generateId('task'),
        createdAt: '2022-12-23T11:12:28.211Z',
        subtitle: 'Subtitle',
        tags: [
            {
                id: generateId('tag'),
                icon: 'D',
                text: `It's done`,
            },
            {
                id: generateId('tag'),
                icon: 'C',
                text: `It's cancelled`,
            },
            {
                id: generateId('tag'),
                icon: 'P',
                text: `It's in progress`,
            }
        ],
        comments: [
            {
                id: generateId('comment'),
                user: {
                    id: generateId('user'),
                    name: 'Virus',
                    avator: 'V'
                },
                text: 'This is an awesome task. I think if you take it you will get a heavy pleasures. thanks for visiting the site.'
            }
        ],
        tasks: [
            {
                id: generateId('todo'),
                icon: 'A',
                title: 'Foggy Nelson',
                text: 'Here is some example of doing a job nicely',
                status: 'done'
            },
            {
                id: generateId('todo'),
                icon: 'B',
                title: 'Albert Einstein',
                text: 'Here is some example of doing a job nicely and perfectly',
                status: 'cancell'
            },
            {
                id: generateId('todo'),
                icon: 'D',
                title: 'Leuis GK',
                text: 'Here you will get some mcq questions everyday.',
                status: 'progress'
            }
        ]
    },
    {
        id: generateId('task'),
        createdAt: '2022-12-23T11:12:28.211Z',
        subtitle: 'Subtitle',
        tags: [
            {
                id: generateId('tag'),
                icon: 'D',
                text: `It's done`,
            },
        ],
        comments: [
            {
                id: generateId('comment'),
                user: {
                    id: generateId('user'),
                    name: 'Virus',
                    avator: 'V'
                },
                text: 'This is an awesome task. I think if you take it you will get a heavy pleasures. thanks for visiting the site.'
            }
        ],
        tasks: [
            {
                id: generateId('todo'),
                icon: 'A',
                title: 'Foggy Nelson',
                text: 'Here is some example of doing a job nicely',
                status: 'done'
            },
            {
                id: generateId('todo'),
                icon: 'B',
                title: 'Albert Einstein',
                text: 'Here is some example of doing a job nicely and perfectly',
                status: 'cancell'
            },
        ]
    },
    {
        id: generateId('task'),
        createdAt: '2022-12-23T11:12:28.211Z',
        subtitle: 'Subtitle',
        tags: [
            {
                id: generateId('tag'),
                icon: 'D',
                text: `It's done`,
            },
            {
                id: generateId('tag'),
                icon: 'P',
                text: `It's in progress`,
            }
        ],
        comments: [],
        tasks: [
            {
                id: generateId('todo'),
                icon: 'A',
                title: 'Foggy Nelson',
                text: 'Here is some example of doing a job nicely',
                status: 'done'
            },
        ]
    }
]

function generateId(text) {
    return `unique_${text}_${String(Math.random()).substring(3, 8)}`;
}

function getDay(date) {
    // const date = new Date(dateStr);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date(date).getDay()];
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

const TagItem = ({tag}) => {
    return (
        <li>
            <small>{tag.icon}</small> - {tag.text}
        </li>
    )
}

const CommentItem = ({comment}) => {
    return (
        <div className='comment-item'>
            <h3>{comment.user.avator} - {comment.user.name}</h3>
            <p>{comment.text}</p>
        </div>
    )
}

const TaskItem = ({task}) => {
    return (
        <li>
            <h3>{task.icon} - {task.title}</h3>
            <p><small>{task.status}</small></p>
            <p>{task.text}</p>
        </li>
    )
}

const TaskCard = ({task}) => {
    return (
        <div className='day-card'>
            <h1 className='title'>
                {getDay(task.createdAt)}, {formatDate(task.createdAt)}
            </h1>
            <h3 className='subtitle'>{task.subtitle}</h3>
            <ul className='tag-ul'>
                {task.tags.map(tag => <TagItem key={tag.id} tag={tag} />)}
            </ul>
            <div className="line" />
            <p>Notes linked to people</p>
            <div className='comments'>
                {task.comments.map((comment) => <CommentItem key={comment.id} comment={comment} />)}
            </div>
            <ul className='tasks'>
                {task.tasks.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>
        </div>
    )
}

const App = () => {
    return (
        <div className='cards-group'>
            {tasks.map(task => <TaskCard key={task.id} task={task} />)}
        </div>
    )
}

export default App;