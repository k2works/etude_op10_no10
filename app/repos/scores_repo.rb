class ScoresRepo
  def find(score_id)
    Score.find(score_id)
  end

  def all
    Score.all
  end

  def new(params)
    Score.new(params)
  end

  def update(score, params)
    score.update(params)
  end

  def destroy(score)
    score.destroy
  end

  def save(score)
    score.save
  end
end