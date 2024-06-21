import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import { ThumbsUp,MessageSquare} from "lucide-react";

interface PostCardProps {
  title: string;
  content: string;
  author: string;
  date: string;
  likes: number;
  comments: number;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author, date, likes, comments }) => {
return (
    <Card className="p-4 mb-4 w-auto max-w-[680px]">
        <div className="flex items-center mb-2">
        <img src='https://s3-alpha-sig.figma.com/img/9d6d/cfc1/fb8cd40116ca161e463af1ee400a729e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xv4gVQczSf8xl8Zyn5R8B8mb-6nillPV3wSXkQ0QLU5Nl5wdfRSUePjbg9yjh-oT6Y93PQXijCdDASMHslqnPQHztldJqooBKVq0togD6TeKvxar~aEs-Pjg9APS3TGXN-mOaXeb23exd487g3xo1C64PbdHl1zpWV~wp0aD-t62UDgPNwDDQOsUMRerN8FVJ1FWmA0xP-NNbtzRoxB9kLyzGjglLYPBC85Co3qwJoQa66qOMkOhjkMDu4nnLmQp5mRO2S3qYEGPmUydj7WYsa5TBlpsoJAOQqM1wpF15aLkfRF3sCVOEL1u~9tFaQRiDzVNmbjpEdAfnO5DElp7xg__' alt="Avatar" className="w-10 h-10 rounded-full mr-4" />
            <div className="flex-1">
                <CardTitle className="text-lg font-bold">{title}</CardTitle>
                <p className="text-detail text-[#6B7280]">By {author}</p>
            </div>
            <div className="flex">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center">
                        <span className="mr-2"><ThumbsUp style={{ color: '#105535' }}/></span>
                        <span className="text-[#105535]">{likes}</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-2"><MessageSquare style={{ color: '#105535' }}/></span>
                        <span className="text-[#105535]">{comments}</span>
                    </div>
                </div>
            </div>
        </div>
        <CardContent className="text-subtle p-0 mb-4 ml-14">{content}</CardContent>
        <div className="flex items-center text-[#6B7280] text-detail ml-14">{date}
        </div>
    </Card>
);
};

export default PostCard;
