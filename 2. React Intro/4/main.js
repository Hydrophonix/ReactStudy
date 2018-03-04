const TWEETS = [
    {
        id: 1,
        author: 'bennettb83',
        text: 'Distinguishing between a muffin and chihuahua will be the next big hurdle in #machinelearning. @Redo @Louis_Monier',
        image: 'https://pbs.twimg.com/media/ChL0GdiU0AIWdC_.jpg',
        avatar: 'https://pbs.twimg.com/profile_images/697667697564200960/j72a_Ozw_bigger.jpg',
        likes: 233,
        retweets: 212,
        isLiked: true,
        isRetweeted: false
    },
    {
        id: 2,
        author: 'r00k',
        text: 'Beginner: I wrote 1,000 lines of code! Intermediate: I deleted 1,000 lines of code! Expert: I prevented code from being written!',
        avatar: 'https://pbs.twimg.com/profile_images/631229918819520512/NGocw_XD_bigger.jpg',
        likes: 2233,
        retweets: 1084,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 3,
        author: 'anechka45789',
        text: 'Nobody retweets me',
        image: 'https://styler.rbc.ua/static/img/c/a/cats_650x410.jpg',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
        likes: 3,
        retweets: 0,
        isLiked: false,
        isRetweeted: false
    },
    {
        id: 4,
        author: 'bendhalpern',
        text: `Sometimes when I'm writing Javascript I want to throw up my hands and say "this is bullshit!" but I can never remember what "this" refers to`,
        avatar: 'https://pbs.twimg.com/profile_images/774717065013948416/hx4dsWxS_400x400.jpg',
        likes: 9457,
        retweets: 10833,
        isLiked: true,
        isRetweeted: true
    },
];

const Tweet = React.createClass({
    getInitialState() {
    return {
      flag: true
      }
    },

    handleChange() {
    this.setState({
      flag: !this.state.flag
      })
    },
    render() {
        const {
            avatar,
            author,
            text,
            image,
            retweets,
            likes,
            isLiked,
            isRetweeted
        } = this.props;

        return (
            <div className="tweet">
                <img className="tweet-avatar" src={avatar} />

                <div className="tweet-body">
                    <a
                        className="tweet-author"
                        href={`https://twitter.com/${author}`}
                        target="blank"
                    >
                        @{author}
                    </a>

                    <p style={{fontSize: (likes + retweets >= 100) ? 22 : 18}} className="tweet-text">
                        {text}
                    </p>

                    {
                        image &&
                        <img className="tweet-image" src={image} />
                    }

                    <div className="tweet-stats">
                        <div className={`tweet-retweets ${isRetweeted}`}>
                            <i className="tweet-stat-icon fa fa-retweet" />
                            {retweets || null}
                        </div>
                        <div className={`tweet-likes ${isLiked}`}>
                            <i className="tweet-stat-icon fa fa-heart {isLiked}" />
                            {likes || null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

const Feed = React.createClass({
    render() {
        return (
            <div>
                {
                    TWEETS.map(tweet =>
                        <Tweet
                            key={tweet.id}
                            author={tweet.author}
                            text={tweet.text}
                            image={tweet.image}
                            avatar={tweet.avatar}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                            isLiked={tweet.isLiked}
                            isRetweeted={tweet.isRetweeted}
                        />
                    )
                }
            </div>
        );
    }
});

ReactDOM.render(
    <Feed />,
    document.getElementById('root')
);
