import './share.css'
import { PermMedia ,Label,Room,EmojiEmotions} from '@material-ui/icons'

function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                  <img className="shareProfileImg" src="https://images.unsplash.com/photo-1541752171745-4176eee47556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbiUyMG1hbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="qw" />
                    <input placeholder="what in your mind" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Locations</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">share</button>
                </div>
            </div>
        </div>
    )
}

export default Share
