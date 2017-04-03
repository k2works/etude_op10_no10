class BowlingGameScoreService
  def self.create_from
    BowlingGameForm.new
  end

  def self.setup_form(params)
    form = BowlingGameForm.new
    form.assign_attributes(params)
    form.add
    form
  end

  def self.get_scores_for_select
    BowlingGameForm::SCORES
  end

  def self.setup_calculate_form(params)
    form = self.setup_form(params)
    form.score_for_frames
    form.score
    form
  end

  def self.save_form(params)
    form = self.setup_calculate_form(params)
    repo = ScoresRepo.new
    score = Score.new(form.to_hash)
    repo.save(score)
  end

  def self.search_form
    repo = ScoresRepo.new
    score = repo.all.last
    unless score.nil?
      self.setup_calculate_form_for_search(score)
    end
  end

  def self.setup_calculate_form_for_search(score)
    form = self.setup_form_for_search(score)
    form.score_for_frames
    form.score
    form
  end

  def self.setup_form_for_search(params)
    form = BowlingGameForm.new
    form.assign_attributes_for_search(params)
    form.add
    form
  end
end