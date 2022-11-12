export class publicationModel {
  constructor(
    id,
    authorImgLink,
    authorName,
    authorNikName,
    publicationDate,
    comment,
    imgLink,
    likes,
    comments,
    retweetes
  ) {
    this.id = id;
    this.authorImgLink = authorImgLink;
    this.authorName = authorName;
    this.authorNikName = authorNikName;
    this.publicationDate = publicationDate;
    this.comment = comment;
    this.imgLink = imgLink;
    this.likes = likes;
    this.comments = comments;
    this.retweetes = retweetes;
  }
}
