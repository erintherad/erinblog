import React from "react"
import Image from "gatsby-image"

const SocialIcon = (props) => {
    const { media, href, handle = "erintherad", alt } = props;
    return (
        <span>
            {media && (
                <a href={`${href}${handle}`}>
                    <Image
                        fixed={media}
                        alt={alt}
                        className="social-icons"
                    />
                </a>
                )}
            {` `}
        </span>
    )
}

export default SocialIcon