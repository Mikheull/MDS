const PollModel = require('../models/polls')
const PollQuestionModel = require('../models/polls_questions')
const PollQuestionAnswerModel = require('../models/polls_questions_answers')
const PollAnswerModel = require('../models/polls_answers')
const EventModel = require('../models/events')

/**
 * Polls
 * @class
 */

class Poll {
  constructor (app, connect) {
    this.app = app
    this.PollModel = connect.model('Poll', PollModel)
    this.PollQuestionModel = connect.model('PollQuestion', PollQuestionModel)
    this.PollQuestionAnswerModel = connect.model('PollQuestionAnswer', PollQuestionAnswerModel)
    this.PollAnswerModel = connect.model('PollAnswer', PollAnswerModel)
    this.EventModel = connect.model('Event', EventModel)

    this.getPolls()
    this.getPoll()
    this.createPoll()
    this.updatePoll()
    this.deletePoll()
    this.createPollQuestion()
    this.getPollQuestions()
    this.createPollQuestionAnswer()
    this.getPollQuestionsAnswers()

    // this.createAnswer()
  }

  /**
     * Get all polls
     * @Endpoint : /v1/polls
     * @Method : GET
     */
  getPolls () {
    this.app.get('/v1/polls', (req, res) => {
      try {
        this.PollModel.find({}, function (err, polls) {
          if (err) {
            console.log(err)
          }
          res.status(200).json(
            {
              data: {
                total: Object.keys(polls).length,
                polls
              }
            }
          )
        }).populate('author_id')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
    
  /**
     * Get one poll
     * @Endpoint : /v1/polls/{id}
     * @Method : GET
     */
  getPoll () {
    this.app.get('/v1/polls/:id', (req, res) => {
      try {
        this.PollModel.findById(req.params.id).populate('author_id').then(poll => {
          if (poll) {
            res.status(200).json(
              { 
                poll: poll 
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            ) 
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Get question of a poll
     * @Endpoint : /v1/polls/{id}/questions
     * @Method : GET
     */
  getPollQuestions () {
    this.app.get('/v1/polls/:id/questions', (req, res) => {
      try {
        this.PollModel.findById(req.params.id).populate('author_id').then(poll => {
          if (poll) {
            this.PollQuestionModel.find({'poll_ref': req.params.id}).populate('poll_ref').then(pollQuesions => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(pollQuesions).length,
                    pollQuesions
                  }
                }
              )
            })
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Get the possible answers of a question
     * @Endpoint : /v1/polls/{id}/questions/{question_id}/answers
     * @Method : GET
     */
  getPollQuestionsAnswers () {
    this.app.get('/v1/polls/:id/questions/:question_id/answers', (req, res) => {
      try {
        this.PollQuestionModel.findById(req.params.question_id).populate('poll_ref').then(poll => {
          if (poll) {
            this.PollQuestionAnswerModel.find({'question_ref': req.params.question_id}).populate('poll_ref, question_ref').then(questionAnswers => {
              res.status(200).json(
                {
                  data: {
                    total: Object.keys(questionAnswers).length,
                    questionAnswers
                  }
                }
              )
            })
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
    
  /**
     * Create a poll
     * @Endpoint : /v1/polls/create
     * @Method : POST
     */
  createPoll () {
    this.app.post('/v1/polls/create', (req, res) => {
      try {
        const pollModel = new this.PollModel(req.body)
                
        this.EventModel.findOne({ managers: { '$in': [req.body.author_id] } }, function (err, event) {
          if (err) {
            console.log(err)
          }
          if (event) {
            pollModel.save().then(poll => {
              res.status(201).json(
                {
                  data: {
                    poll
                  }
                }
              )
            }).catch(err => {
              if (err) {
                res.status(400).json(
                  {
                    error: {
                      code: 400,
                      message: 'An error has occurred'
                    }
                  }
                )  
              }
            })
          } else {
            res.status(400).json(
              { 
                error: {
                  status: 400,
                  message: 'author_id is not a manager'
                } 
              }
            ) 
          }
        }).populate('managers, members')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Create a question in a poll
     * @Endpoint : /v1/polls/{id}/questions/create
     * @Method : POST
     */
  createPollQuestion () {
    this.app.post('/v1/polls/:id/questions/create', (req, res) => {
      try {
        const pollQuestionModel = new this.PollQuestionModel(req.body)
                
        this.PollModel.findById(req.params.id, function (err, poll) {
          if (err) {
            console.log(err)
          }
          if (poll) {
            pollQuestionModel.save().then(question => {
              res.status(201).json(
                {
                  data: {
                    question
                  }
                }
              )
            }).catch(err => {
              if (err) {
                res.status(400).json(
                  {
                    error: {
                      code: 400,
                      message: 'An error has occurred'
                    }
                  }
                )  
              }
            })
          } else {
            res.status(400).json(
              { 
                error: {
                  code: 400,
                  message: 'This poll does not exist'
                } 
              }
            ) 
          }
        }).populate('author_id')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Create a possible answer of a question
     * @Endpoint : /v1/polls/{id}/questions/{question_id}/answer/create
     * @Method : POST
     */
  createPollQuestionAnswer () {
    this.app.post('/v1/polls/:id/questions/:question_id/answer/create', (req, res) => {
      try {
        const pollQuestionAnswerModel = new this.PollQuestionAnswerModel(req.body)
                
        this.PollQuestionModel.findById(req.params.question_id, function (err, pollQuestion) {
          if (err) {
            console.log(err)
          }
          if (pollQuestion) {
            pollQuestionAnswerModel.save().then(questionAnswer => {
              res.status(201).json(
                {
                  data: {
                    questionAnswer
                  }
                }
              )
            }).catch(err => {
              if (err) {
                res.status(400).json(
                  {
                    error: {
                      code: 400,
                      message: 'An error has occurred'
                    }
                  }
                )  
              }          
            })
          } else {
            res.status(400).json(
              { 
                error: {
                  status: 400,
                  message: 'question does not exist'
                } 
              }
            ) 
          }
        }).populate('poll_ref')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Créer une réponse a une question dans un sondage
     * @Endpoint : /v1/polls/{id}/questions/{question_id}/answer/define
     * @Method : POST
     */
  createAnswer () {
    this.app.post('/v1/polls/:id/questions/:question_id/answer/define', (req, res) => {
      try {
        const pollModel = new this.PollModel(req.body)
        const pollQuestionModel = new this.PollQuestionModel(req.body)
        const pollQuestionAnswerModel = new this.PollQuestionAnswerModel(req.body)
        const pollAnswerModel = new this.PollAnswerModel(req.body)
                
        pollModel.findById(req.params.id, function (err, poll) {
          if (err) {
            console.log(err)
          }
          if (poll) {
            pollQuestionModel.findById(req.params.question_id, function (err, question) {
              if (err) {
                console.log(err)
              }
              if (question) {
                pollQuestionAnswerModel.findOne({'content': req.body.answer, 'poll_ref': req.params.id, 'question_ref': req.params.question_id}, function (err, answer) {
                  if (err) {
                    console.log(err)
                  }
                  if (answer) {
                    pollAnswerModel.save().then(answer => {
                      res.status(201).json(
                        {
                          data: {
                            answer
                          }
                        }
                      )
                    }).catch(err => {
                      if (err) {
                        res.status(400).json(
                          {
                            error: {
                              code: 400,
                              message: 'An error has occurred'
                            }
                          }
                        )  
                      }
                    })
                  } else {
                    res.status(400).json(
                      { 
                        error: {
                          code: 400,
                          message: 'this answer does not exist'
                        } 
                      }
                    ) 
                  }
                }).populate('poll_ref, question_ref')
              } else {
                res.status(400).json(
                  { 
                    error: {
                      cpde: 400,
                      message: 'This question does not exist'
                    } 
                  }
                ) 
              }
            }).populate('poll_ref')
          } else {
            res.status(400).json(
              { 
                error: {
                  code: 400,
                  message: 'This poll does not exist'
                } 
              }
            ) 
          }
        }).populate('author_id')
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Edit a poll
     * @Endpoint : /v1/polls/{id}/update
     * @Method : PUT
     */
  updatePoll () {
    this.app.put('/v1/polls/:id/update', (req, res) => {
      try {
        this.PollModel.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate('author_id').then(poll => {
          if (poll) {
            res.status(201).json(
              {
                data: {
                  poll
                }
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            ) 
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }

  /**
     * Delete a poll
     * @Endpoint : /v1/polls/{id}/delete
     * @Method : DELETE
     */
  deletePoll () {
    this.app.delete('/v1/polls/:id/delete', (req, res) => {
      try {
        this.PollModel.findByIdAndDelete(req.params.id).populate('author_id').then(poll => {
          if (poll) {
            res.status(200).json(
              {
                data: {
                  code: 200,
                  message: 'This poll has successfully deleted'
                }
              }
            )
          } else {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )
          }
        }).catch(err => {
          if (err) {
            res.status(400).json(
              {
                error: {
                  code: 400,
                  message: 'ID not found'
                }
              }
            )  
          }
        })
      } catch (err) {
        if (err) {
          console.log(err)
        }
        res.status(500).json(
          {
            error: {
              code: 500,
              message: 'Internal Server Error'
            }
          }
        )
      }
    })
  }
}

module.exports = Poll
