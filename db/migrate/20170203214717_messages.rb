class Messages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.string :slack_team_name
      t.string :slack_channel_name
      t.string :body
      t.timestamps
    end
  end
end
