import React from 'react';
import Link from "next/link";
import {NextPageContext} from "next";
import {MyPost} from "../../interfaces/post";
import {getPostById} from "../api/postsService";
import {Post} from "../components/post/post";


interface PostPreviewProps {
    post: MyPost
}

export default function PostPreview({post}: PostPreviewProps) {

    if (!post) {
        return <p>Loading...</p>

    }

    return (
        <>
           <Post item={post} />
            <Link href={'/'}><a>Back to all posts</a></Link>
        </>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}


PostPreview.getInitialProps = async ({query}: PostNextPageContext) => {
    const post = await getPostById(query.id);
    return {
        post
    }
}
