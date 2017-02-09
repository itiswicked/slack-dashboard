require 'rails_helper'


describe V1::MessagesController, type: :controller do

  describe "#index" do
    before :each do
      create(:message)
      create(:message)
      get :index
    end

    it "responds with all messages" do
      expect(json["messages"]).to be_an(Array)
    end

    it "responds with attributes for each record" do
      first_record = json["messages"][0]
      expect(first_record["id"]).to be_present

      expect(first_record["body"]).to be_present
      expect(first_record["slack_team_name"]).to be_present
      expect(first_record["slack_channel_name"]).to be_present
    end
  end

  describe "#create" do
    context "the create request is awesome" do
      it "creates a new messages record" do
        message = attributes_for(:message)
        post_action = -> {  post(:create, params: { message: message })  }

        expect(post_action).to change{ Message.count }.by(1)
        expect(response.status).to eq 200
      end
    end

    context "the create request is not awesome" do
      it "does not create a new message record" do
        message = { body: "", slack_team_name: "", }
        post_action = -> { post(:create, params: { message: message }) }

        expect(post_action).to change{ Message.count }.by(0)
        expect(response.status).to eq 422
      end
    end


    describe '#update' do
      let!(:original_message) { create(:message) }
      context "the update request is awesome" do
        it "updates the record with new info" do
          new_message = attributes_for(:message)
          params = { id: original_message.id, message: new_message }
          patch_action = -> { patch(:update, params: params) }

          expect(patch_action).to change{ Message.count }.by(0)
          expect(response.status).to eq 200
          # binding.pry
          expect(new_message[:body]).to eq original_message.body
        end
      end

      context "the update request is not awesome" do
        it "does not update the record with new info" do
          old_body = original_message.body
          new_message = { body: "", slack_team_name: "" }
          params = { id: original_message.id, message: new_message }
          patch_action = -> { patch(:update, params: params) }

          expect(patch_action).to change{ Message.count }.by(0)
          expect(response.status).to eq 422
          expect(original_message.body).to eq old_body
        end
      end
    end

    describe "#destroy" do
      let!(:sunsetting_message) { create(:message) }
      context "the delete request is awesome" do
        it "deletes the record" do
          delete_action = -> {
            delete(:destroy, params: { id: sunsetting_message.id })
          }

          expect(delete_action).to change{ Message.count }.by(-1)
          expect(response.status).to eq 200
        end
      end
    end
  end
end
